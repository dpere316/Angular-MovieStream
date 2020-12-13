import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import { NgModule } from '@angular/core';



@NgModule ({
  imports: [ MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule, MatCardModule],
  exports: [ MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule, MatCardModule]

})

export class MaterialModule { }

