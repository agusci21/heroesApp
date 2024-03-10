import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styles: ``,
})
export class HeroPageComponent implements OnInit {
  public hero?: Hero;
  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService,
    private router: Router
  ) {}

  goBack(): void {
    this.router.navigateByUrl('heroes/list');
  }
  ngOnInit(): void {
    let heroId: string;
    this.activatedRoute.params.subscribe(({ id }) => (heroId = id));

    this.heroesService.getHeroById(heroId!).subscribe((hero) => {
      if (!hero) {
        this.router.navigateByUrl('/heroes/list');
        return;
      }
      this.hero = hero;
    });
  }
}
