import { Injectable } from '@angular/core';
import { Family } from '../models/family';
import { FAMILIES } from './mock-family';

@Injectable()

export class FamilyService {
	getFamilies(): Family[] {
		return FAMILIES;
	} 
}