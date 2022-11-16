export declare const BackendServerPorts: {
    camphoot: number;
    flyhoot: number;
    dayhoot: number;
};
export declare type HootsoftApp = "flyhoot" | "camphoot" | "dayhoot";
export declare type ProductEnvironment = "production" | "test" | "dev" | "local";
export declare type AppServices = CamphootService | FlyhootService;
declare type CamphootService = "authentication-service" | "user-service" | "visit-service";
declare type FlyhootService = "airport-service";
export {};
