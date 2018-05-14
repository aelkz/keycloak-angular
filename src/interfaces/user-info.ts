export class UserInfo {

    public id: string;
    public userName: string;
    public fullName: string;
    public email: string;
    public valid = false;
    public impersonated = false;
    public impersonator: UserInfo;

    constructor(id: string, userName: string, fullName: string, email: string) {
        this.id = id;
        this.userName = userName;
        this.fullName = fullName;
        this.email = email;
    }

    getId(): string {
        return this.id;
    }

    getUsername(): string {
        return this.userName;
    }

    getFullName(): string {
        return this.fullName;
    }

    getEmail(): string {
        return this.email;
    }

    isValid(): boolean {
        return this.valid;
    }

    setValid(v: boolean): UserInfo {
        this.valid = v;
        return this;
    };

    isImpersonated(): boolean {
        return this.impersonated || this.impersonator != null;
    }

    setImpersonated(v: boolean): UserInfo {
        this.impersonated = v;
        return this;
    }

    getImpersonator(): UserInfo {
        return this.impersonator;
    }

    setImpersonator(i: UserInfo) {
        this.impersonator = i;
    }

    toString(): string {
        return this.getEmail() + ':' + this.getUsername() + ':' + this.getFullName() + ':' + this.getId();
    }

}
