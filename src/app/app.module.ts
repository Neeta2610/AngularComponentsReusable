import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RatingModule} from 'ng-starrating';
import { Ng5SliderModule } from 'ng5-slider';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { GuestConfigComponent } from './guest-config/guest-config.component';
import { EventClickDirective } from './event-click.directive';
import { SliderComponent } from './slider/slider.component';
import { OptionSelectorComponent } from './option-selector/option-selector.component';
import { DesktopFiltertagComponent } from './desktop-filtertag/desktop-filtertag.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { GuestConfig1Component } from './guest-config1/guest-config1.component';
import { ToggleViewComponent } from './toggle-view/toggle-view.component';
import { CalloutcompComponent } from './calloutcomp/calloutcomp.component';
import { CollapseComponent } from './collapse/collapse.component';
import { InputcheckBoxComponent } from './inputcheck-box/inputcheck-box.component';
import { ThumbnailsliderComponent } from './thumbnailslider/thumbnailslider.component';
import { ThumbnailComponentComponent } from './thumbnail-component/thumbnail-component.component';
import { DesktopCalendarComponent } from './desktop-calendar/desktop-calendar.component';
import { InputradioButtonComponent } from './inputradio-button/inputradio-button.component';
import { GoogleMapComponent } from './google-map/google-map.component';
import { HotellistCardComponent } from './hotellist-card/hotellist-card.component';
import { BreadCrumbComponent } from './bread-crumb/bread-crumb.component';
import { TogleButtonComponent } from './togle-button/togle-button.component';
import { ProgressIndicatorComponent } from './progress-indicator/progress-indicator.component';
import { ProfileSidebarComponent } from './profile-sidebar/profile-sidebar.component';
import { MobiletypingCalendarComponent } from './mobiletyping-calendar/mobiletyping-calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    GuestConfigComponent,
    EventClickDirective,
    SliderComponent,
    OptionSelectorComponent,
    DesktopFiltertagComponent,
    DropdownComponent,
    GuestConfig1Component,
    ToggleViewComponent,
    CalloutcompComponent,
    CollapseComponent,
    InputcheckBoxComponent,
    ThumbnailsliderComponent,
    ThumbnailComponentComponent,
    DesktopCalendarComponent,
    InputradioButtonComponent,
    GoogleMapComponent,
    HotellistCardComponent,
    BreadCrumbComponent,
    TogleButtonComponent,
    ProgressIndicatorComponent,
    ProfileSidebarComponent,
    MobiletypingCalendarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RatingModule,
    Ng5SliderModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyB3TF_AQVCs7SDAQqaXTU1ykHQcJt7EpK0'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
