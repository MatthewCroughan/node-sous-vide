import { Characteristic } from "@abandonware/noble";

export type DeviceConfig = {
  serviceUUID: string;
  txCharacteristicUUID: string;
  rxCharacteristicUUID: string;
  asyncCharacteristicUUID: string;
  targetTemperatureScale: number;
  temperatureScale: number;
  sensorTemperatureScale: number;
};

export interface IDevice {
  config: DeviceConfig;
  read: Characteristic;
  write: Characteristic;

  start(): Promise<void>;
  stop(): Promise<void>;
  getCookerStatus(): Promise<any>;
  getTargetTemperate(): Promise<any>;
  getTemperateUnit(): Promise<any>;
  getTimer(): Promise<any>;
  getFirmwareInfo(): Promise<any>;
  setTemperatureUnit(unit: string): Promise<any>;
  setTargetTemperature(unit: number): Promise<any>;
  setTimer(timer: number): Promise<any>;
  sendDeviceCommand(command: any[]): Promise<any>;
}