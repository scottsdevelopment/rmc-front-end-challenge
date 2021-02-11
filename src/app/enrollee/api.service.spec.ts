import { TestBed } from '@angular/core/testing';
import {
  HttpTestingController,
  HttpClientTestingModule,
} from '@angular/common/http/testing';

import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { EnrolleeApiRoute } from './enrollee-api-route.enum';
import { Enrollee, IdentifiedEnrollee } from 'backend/enrollees';

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a list of all enrollees', () => {
    // Create mock enrollee data
    const mockEnrollees = {
      '36653835-fbe0-4c42-a93c-3e561823934f': {
        active: true,
        name: 'Gabe Newell',
        dateOfBirth: '1962-11-3',
      },
      'ed9f9e35-9767-4586-a19b-903661aa859d': {
        active: true,
        name: 'Todd Howard',
        dateOfBirth: '1971-04-25',
      },
    };

    // Create expectation about mock data request
    service.getEnrollees().subscribe((enrollees) => {
      expect(enrollees).toEqual(mockEnrollees);
    });

    // Expect the route to be called once.
    const mockReq = httpMock.expectOne(
      service.getRoute(EnrolleeApiRoute.Enrollees),
    );

    // Expect the request method to match
    expect(mockReq.request.method).toEqual('GET');

    // Flush our mock data
    mockReq.flush(mockEnrollees);

    // Verify that we have no outstanding requests
    httpMock.verify();
  });

  it('should return a single enrollee by id', () => {
    const mockEnrollee = {
      id: '36653835-fbe0-4c42-a93c-3e561823934f',
      active: true,
      name: 'Gabe Newell',
      dateOfBirth: '1962-11-3',
    };

    service.getEnrolleeById(mockEnrollee.id).subscribe((enrollee) => {
      expect(enrollee).toEqual(mockEnrollee);
    });

    const mockReq = httpMock.expectOne(
      service.getRoute(EnrolleeApiRoute.Enrollees) + `/${mockEnrollee.id}`,
    );

    expect(mockReq.request.method).toEqual('GET');

    mockReq.flush(mockEnrollee);

    httpMock.verify();
  });

  it('should update a single enrollee by id', () => {
    const mockEnrolleeId = '36653835-fbe0-4c42-a93c-3e561823934f';
    const mockEnrolleeData: Enrollee = {
      active: true,
      name: 'Gabe Newell',
      dateOfBirth: '1962-11-3',
    };
    const mockEnrolleeResponse: IdentifiedEnrollee = {
      id: '36653835-fbe0-4c42-a93c-3e561823934f',
      active: true,
      name: 'Gabe Newell',
      dateOfBirth: '1962-11-3',
    };

    service
      .updateEnrollee(mockEnrolleeId, mockEnrolleeData)
      .subscribe((enrollee) => {
        expect(enrollee).toEqual(mockEnrolleeResponse);
      });

    const mockReq = httpMock.expectOne(
      service.getRoute(EnrolleeApiRoute.Enrollees) + `/${mockEnrolleeId}`,
    );

    expect(mockReq.request.method).toEqual('PUT');

    mockReq.flush(mockEnrolleeResponse);

    httpMock.verify();
  });
});
