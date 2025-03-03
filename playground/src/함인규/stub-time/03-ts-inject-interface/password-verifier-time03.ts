import { WeekDay } from "./time-provider-interface";
import type { TimeProviderInterface } from "./time-provider-interface";

export interface ValidationResult {
    passed: boolean;
    reason?: string;
}

export type ValidationRule = (input: string) => ValidationResult;

export class PasswordVerifier {
    private timeProvider: TimeProviderInterface;
    private rules: ValidationRule[];

    constructor(rules: ValidationRule[], timeProvider: TimeProviderInterface) {
        this.rules = rules;
        this.timeProvider = timeProvider;
    }

    verify(input: string): string[] {
        const isWeekend = [WeekDay.SUNDAY, WeekDay.SATURDAY]
            .filter(x => x === this.timeProvider.getDay())
            .length > 0;

        if (isWeekend) {
            throw new Error("It's the weekend!");
        }

        // 더 많은 로직이 여기에 있다.
        return [];
    }
}