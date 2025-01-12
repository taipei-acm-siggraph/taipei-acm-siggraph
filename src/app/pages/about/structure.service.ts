import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Organization } from '@data/schema/organization.schema';

@Injectable({
  providedIn: 'root', // 這樣可讓此 service 變成全域的注入 (singleton)
})
export class OrganizationService {
  // 可以在這直接指定 organization.json 的路徑
  private jsonUrl = `/assets/json/organization.json`;

  constructor(private http: HttpClient) {}

  // 回傳 Observable，讓 component 可以去訂閱 (subscribe)
  getOrganizations(): Observable<Organization[]> {
    return this.http.get<Organization[]>(this.jsonUrl);
  }
}
