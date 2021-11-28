declare module 'windows-1251' {
  type EncodeOptions = {
    mode: 'fatal' | 'replacement';
  };
  type DecodeOptions = {
    mode: 'fatal' | 'replacement';
  };

  export declare function encode(
    text: string,
    options?: EncodeOptions
  ): Uint16Array;
  export declare function decode(
    buffer: Uint16Array | Uint8Array | Buffer | string,
    options?: DecodeOptions
  ): string;
  export type labels = string[];
}
