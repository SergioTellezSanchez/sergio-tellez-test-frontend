export interface Car {
  description: string;
  maker: string;
  carModel: string;
  carId?: number | string;
  km: number | string;
  onMaintenance: boolean;
  _id?: string;
  estimatedDate?: string | Date | number;
  personalData?: {
    ownerName: string;
    ownerNumber: number;
    ownerAddress: string;
  };
  createdAt?: string;
  updatedAt?: string;
}
