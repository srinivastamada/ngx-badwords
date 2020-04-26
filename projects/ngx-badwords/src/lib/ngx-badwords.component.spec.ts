import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxBadwordsComponent } from './ngx-badwords.component';

describe('NgxBadwordsComponent', () => {
  let component: NgxBadwordsComponent;
  let fixture: ComponentFixture<NgxBadwordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxBadwordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxBadwordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
