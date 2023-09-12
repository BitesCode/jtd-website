import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {

  servicesCardDetails= [
    {
      imgUrl: "assets/services/icons/publicity-Design.png",
      title: "Film Publicity Campaign",
      desc: "We create groundbreaking Publicity Designing for Feature Films, Web Series and any sort of Entertainment Stuffs. We believe in the Pre-Release & Post-Release Buzz Rule."
    },
    {
      imgUrl: "assets/services/icons/Branding.png",
      title: "Packaging Design",
      desc: "Being the best Creative & Digital agency, we only focus on creating an unified &amp; distinctive language through design & communication, what you need to stand out, to make your business, the next best thing."
    },
    {
      imgUrl: "assets/services/icons/Digital.png",
      title: "Performance Marketing",
      desc: "An ever-changing, dynamic process that encompasses many different channels like social media, SEO, email, paid online ads and mobile apps for promoting business interests to prospective customers with a global reach."
    },
    {
      imgUrl: "assets/services/icons/advertising.png",
      title: "Illustrations",
      desc: "As already said, we are the best Creative Agency, thus we ensure to make ad campaigns that effectively narrate a brand’s story through strategic communication in every media, so that the audience not only becomes aware, but also be keen to purchase it. "
    },
    {
      imgUrl: "assets/services/icons/web-dev.png",
      title: "Motion Grpahics",
      desc: "We create your digital address by developing easy-to-navigate, attractive and informative websites."
    },
    {
      imgUrl: "assets/services/icons/photography.png",
      title: "Video Production",
      desc: "We create unique, compelling content relevant to your brand and enhance its online & offline presence."
    }
  ]
}
