import { Injectable } from '@angular/core';

import { skillModule } from "../../module/skill.module";

import { import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { SkillConfigService } from "../../config/skill/skill-config.service";

import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor() { }
}
