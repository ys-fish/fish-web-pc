declare module 'AMapUI' {
    const loadUI: (modules: string[], callback: (SimpleMarker: any) => void) => void;
    export default loadUI;
  }