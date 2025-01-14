import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
      Powered by <b><a href="https://ca-cib.com"
                              target="_blank">Crédit Agricole CIB</a></b> 2022.
      All Rights Reserved
      <b>
        <a href="https://ca-cib.com" target="_blank">
        Terms and Conditions.
        </a>
      </b>
    </span>
    <div class="socials">
      <a href="https://github.com/akveo/ngx-admin" target="_blank" class="ion ion-social-github"></a>
      <a href="https://www.facebook.com/akveo/" target="_blank" class="ion ion-social-facebook"></a>
      <a href="https://twitter.com/akveo_inc" target="_blank" class="ion ion-social-twitter"></a>
      <a href="https://www.linkedin.com/company/akveo" target="_blank" class="ion ion-social-linkedin"></a>
    </div>
  `,
})
export class FooterComponent {
}
