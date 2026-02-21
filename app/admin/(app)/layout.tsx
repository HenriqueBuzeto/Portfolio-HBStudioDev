import { redirect } from 'next/navigation'
import { getAdminUser } from '@/lib/auth'
import AdminShell from '@/components/admin/AdminShell'

export default async function AdminAppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const user = await getAdminUser()
  if (!user) {
    redirect('/admin/login')
  }

  return <AdminShell userEmail={user.email ?? ''}>{children}</AdminShell>
}
