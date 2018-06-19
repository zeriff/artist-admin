import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class TokenService {
  constructor() {}

  public getToken(): string {
    return localStorage.getItem("auth_token");
  }

  public setToken(token: string): void {
    localStorage.setItem("auth_token", token);
  }
}
