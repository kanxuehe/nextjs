declare namespace NodeJS {
  interface ProcessEnv {
    /** 基础路径 */
    NEXT_PUBLIC_BASEURL: string;
    // 密钥
    AUTH_SECRET: string;
  }
}
