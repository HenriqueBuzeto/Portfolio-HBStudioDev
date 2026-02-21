import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

const ALLOWED_ADMIN_EMAIL = process.env.ALLOWED_ADMIN_EMAIL?.trim()
if (!ALLOWED_ADMIN_EMAIL) {
  console.warn('ALLOWED_ADMIN_EMAIL not set; admin auth may fail.')
}

export async function updateSession(request: NextRequest) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  if (!supabaseUrl || !supabaseAnonKey) {
    return NextResponse.next()
  }

  let response = NextResponse.next({
    request: { headers: request.headers },
  })

  const supabase = createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll() {
        return request.cookies.getAll()
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value, options }) =>
          response.cookies.set(name, value, options)
        )
      },
    },
  })

  const {
    data: { user },
  } = await supabase.auth.getUser()

  const pathname = request.nextUrl.pathname
  const isAdminRoute = pathname.startsWith('/admin')
  const isLoginPage = pathname === '/admin/login'

  if (pathname === '/admin' || pathname === '/admin/') {
    return NextResponse.redirect(new URL('/admin/dashboard', request.url))
  }

  if (isAdminRoute && !isLoginPage) {
    if (!user) {
      const redirect = new URL('/admin/login', request.url)
      redirect.searchParams.set('redirectTo', request.nextUrl.pathname)
      return NextResponse.redirect(redirect)
    }
    if (ALLOWED_ADMIN_EMAIL && user.email?.toLowerCase().trim() !== ALLOWED_ADMIN_EMAIL.toLowerCase()) {
      await supabase.auth.signOut()
      const redirect = new URL('/admin/login', request.url)
      redirect.searchParams.set('error', 'unauthorized')
      return NextResponse.redirect(redirect)
    }
  }

  if (isLoginPage && user && ALLOWED_ADMIN_EMAIL && user.email?.toLowerCase().trim() === ALLOWED_ADMIN_EMAIL.toLowerCase()) {
    const redirectTo = request.nextUrl.searchParams.get('redirectTo') || '/admin/dashboard'
    return NextResponse.redirect(new URL(redirectTo, request.url))
  }

  return response
}
