export class CreditCardDirective {
    static selector = "[credit-card]";

    constructor(public element: HTMLElement) { }
    formatCreditNumber(element: HTMLInputElement) {
        const value = element.value.replace(/[^\d]/g, '').substring(0, 16);
        const groups: string[] = [];
        for (let i = 0; i < value.length; i += 4) {
            groups.push(value.substring(i, i + 4));
        }
        console.log(groups);
        element.value = groups.join(' ');
    }
    init() {
        this.element.style.borderColor = "bleu";
        this.element.addEventListener('input', (event) => {
            this.formatCreditNumber(event.target as HTMLInputElement);
        })
    }
}