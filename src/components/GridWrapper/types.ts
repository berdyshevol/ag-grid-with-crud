export type TData = {
  id: string;
  manufacture: string;
  model: string;
  assert_number: string;
  serial_number: string;
  ip_address: string;
  erp_id: string;
  level: Percent;
  coverage: Percent[];
  yield: string;
};

type Percent = number;
