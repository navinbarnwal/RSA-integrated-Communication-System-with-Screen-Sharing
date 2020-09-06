import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockSuspensionComponent } from './block-suspension.component';

describe('BlockSuspensionComponent', () => {
  let component: BlockSuspensionComponent;
  let fixture: ComponentFixture<BlockSuspensionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockSuspensionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockSuspensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
