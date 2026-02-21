ALTER TABLE public.clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contracts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.proposals ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.admin_settings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated admin access clients"
  ON public.clients FOR ALL TO authenticated
  USING (true) WITH CHECK (true);

CREATE POLICY "Authenticated admin access contracts"
  ON public.contracts FOR ALL TO authenticated
  USING (true) WITH CHECK (true);

CREATE POLICY "Authenticated admin access proposals"
  ON public.proposals FOR ALL TO authenticated
  USING (true) WITH CHECK (true);

CREATE POLICY "Authenticated admin access admin_settings"
  ON public.admin_settings FOR ALL TO authenticated
  USING (true) WITH CHECK (true);
