import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {
  AllBuses:any=[];
  baseURL='https://localhost:7169/api/';
  constructor(private http:HttpClient) { }
}
