export declare class GeneratorProvider {
    static uuid(): string;
    static fileName(ext: string): string;
    static generateVerificationCode(): string;
    static generatePassword(): string;
    static generateRandomString(length: number): string;
}
