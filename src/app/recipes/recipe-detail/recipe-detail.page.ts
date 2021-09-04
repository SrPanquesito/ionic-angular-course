/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {

  recipe: Recipe;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private recipeService: RecipesService, private alert: AlertController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      params => {
        if (!params.has('recipeId')) {
          this.router.navigate(['/']);
        }
        const recipeId = params.get('recipeId');
        this.recipe = this.recipeService.getRecipe(recipeId);
      },
      err => console.log(err)
    );
  }

  onDelete(recipeId: string) {
    this.alert.create({
      header: 'Are you sure?',
      message: 'Do you really want to delete the recipe?',
      buttons: [{
        text: 'Cancel',
        role: 'cancel'
      },{
        text: 'Delete',
        handler: () => {
          this.recipeService.deleteRecipe(recipeId);
          this.router.navigate(['/']);
        }
      }]
    })
    .then(alertElement => alertElement.present());
    // this.recipeService.deleteRecipe(this.recipe.id);
  }

}
