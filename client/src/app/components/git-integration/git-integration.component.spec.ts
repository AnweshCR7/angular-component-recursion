import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitIntegrationComponent } from './git-integration.component';

describe('GitIntegrationComponent', () => {
  let component: GitIntegrationComponent;
  let fixture: ComponentFixture<GitIntegrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitIntegrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitIntegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
