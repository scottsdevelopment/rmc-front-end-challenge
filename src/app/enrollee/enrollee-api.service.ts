import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Enrollee, IdentifiedEnrollee } from 'backend/enrollees';
import { Observable } from 'rxjs';
import AppConfig from '../app-config.model';
import { APP_CONFIG } from '../app.config';
import { EnrolleeApiRoute } from './enrollee-api-route.enum';

@Injectable({
  providedIn: 'root',
})
export class EnrolleeApiService {
  constructor(
    @Inject(APP_CONFIG) private readonly _appConfig: AppConfig,
    private readonly _httpClient: HttpClient,
  ) {}

  public getAll(): Observable<IdentifiedEnrollee[]> {
    return this._httpClient.get<IdentifiedEnrollee[]>(
      this.getRoute(EnrolleeApiRoute.Enrollees),
    );
  }

  public getById(enrolleeId: string): Observable<IdentifiedEnrollee> {
    return this._httpClient.get<IdentifiedEnrollee>(
      this.getRoute(EnrolleeApiRoute.Enrollees) + `/${enrolleeId}`,
    );
  }

  public updateEnrollee(
    enrolleeId: string,
    updatedEnrollee: Enrollee,
  ): Observable<IdentifiedEnrollee> {
    return this._httpClient.put<IdentifiedEnrollee>(
      this.getRoute(EnrolleeApiRoute.Enrollees) + `/${enrolleeId}`,
      updatedEnrollee,
    );
  }

  public getRoute(enrolleApiRoute: EnrolleeApiRoute): string {
    return this._appConfig.apiEndpoint + enrolleApiRoute;
  }
}
