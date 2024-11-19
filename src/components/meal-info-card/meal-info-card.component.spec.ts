import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealInfoCardComponent } from './meal-info-card.component';

describe('MealInfoCardComponent', () => {
    let component: MealInfoCardComponent;
    let fixture: ComponentFixture<MealInfoCardComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [MealInfoCardComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(MealInfoCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
