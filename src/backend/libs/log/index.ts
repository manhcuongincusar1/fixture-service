// All concrete loggers must implement this interface to be used by the application
export default interface Log {
  debug(...message: any[]): void;
  info(...message: any[]): void;
  warn(...message: any[]): void;
  error(...message: any[]): void;
}
