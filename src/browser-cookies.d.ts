export interface CookieOptions {
      expires?: number | Date | string;
      domain?: string;
      path?: string;
      secure?: boolean;
      httpOnly?: boolean;
      sameSite?: boolean | 'lax' | 'strict' | 'none';
}
export function set(name: string, value: string, options?: CookieOptions): void;
export function get(name: string): string | null;
export function erase(name: string, options?: CookieOptions): void;
export function all(): { [key: string]: string };
export var defaults: CookieOptions;

