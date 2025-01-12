import { NgFor } from '@angular/common';
import { Component, ViewEncapsulation, effect, inject } from '@angular/core';
import { MetaService } from '@core/services/meta.service';
import { TraktTvService } from '@core/services/trakt-tv.service';
import profileData from '@data/profile.data';
import { Music } from '@shared/components/music/music'
import { Watch } from '@shared/components/watch/watch'
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'contact',
  template: `
  <div class="mb-4 dark:text-white">
    {{routerUrl}}
  </div>
  <section class="flex flex-col max-w-screen-lg justify-between mx-auto gap-8 dark:text-gray-200 overflow-y-hidden">
  <div class="flex flex-col gap-5">
      <h1 class="text-2xl font-semibold dark:text-white">聯絡學會</h1>
      <!-- <p class="justify-start">I'm Marc Kevin Flores, a software
        engineer with over
        five years of
        experience. I specialize in turning
        ideas into polished software, blending innovation with user-friendly design. 🚀</p>
      <p *ngFor="let a of aboutDetails"><b class="dark:text-white text-black">{{a.title}}</b><br />{{a.desc}}
      </p> -->
  </div>
  <!-- <div class="flex flex-col gap-5">
  <h1 class="text-2xl font-semibold dark:text-white">Activity:</h1>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
    <music/>
    <watch/>
  </div>
  </div> -->

<div class="flex flex-col gap-5">
<h1 class="text-2xl font-semibold dark:text-white">Taipei ACM SIGGRAPH:</h1>
  @for(c of contactInfo; track $index){
    <p>
      <b class="dark:text-white text-black ">{{c.title}}:</b><br />
      @if (c.embed) {
        <iframe [src]="this.arr[$index]" width="600" height="450" style="border:0;" referrerpolicy="no-referrer-when-downgrade"></iframe>
      }
      @else{
        <a [href]="c.link" class="hover:underline" target="_blank">{{c.desc}}</a>
      }
    </p>
  }
</div>
</section>
`,
  encapsulation: ViewEncapsulation.None,
  imports: [NgFor, Music, Watch],
  standalone: true
})
export class ContactPage{
  metaService = inject(MetaService)
  traktTvService = inject(TraktTvService)
  routerUrl=""
  arr = new Array<any>
  constructor(public domSanitizer: DomSanitizer) {

    this.routerUrl = this.metaService.routerUrl
    this.metaService.setMetaTags(
      `${this.routerUrl} - ${profileData.name}`,
      'Dive into a curated space to learn more about the person behind the name',
      ['bio', 'biography', 'information', 'about', 'contact', 'detail']
      )
  }
  public contactInfo = [
    {
      title: '統一編號',
      embed: false,
      desc: `26392467`,
      link: ''
    },
    {
      title: '住址',
      embed: false,
      desc: '106台北市大安區羅斯福路四段1號 國立台灣大學資訊工程德田館503室',
      link: ''
    },
    {
      title: '地圖',
      embed: true,
      desc: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.4542239095877!2d121.53789142707714!3d25.018654827826317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442aa266982a61d%3A0x73054453d07310fe!2zMTA25Y-w5YyX5biC5aSn5a6J5Y2A6LOH6KiK5bel56iL6aSoICjlvrfnlLDppKgp!5e0!3m2!1szh-TW!2stw!4v1736601321690!5m2!1szh-TW!2stw`,
      link: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.4542239095877!2d121.53789142707714!3d25.018654827826317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442aa266982a61d%3A0x73054453d07310fe!2zMTA25Y-w5YyX5biC5aSn5a6J5Y2A6LOH6KiK5bel56iL6aSoICjlvrfnlLDppKgp!5e0!3m2!1szh-TW!2stw!4v1736601321690!5m2!1szh-TW!2stw`,
    },
    {
      title: '電話',
      embed: false,
      desc: '(02)33664888 轉 503',
      link: ''
    }
  ]

  ngOnInit(){
    for( let i in this.contactInfo){
      if(this.contactInfo[i].embed) this.arr[i] = this.domSanitizer.bypassSecurityTrustResourceUrl(this.contactInfo[i].link)
    }
  }
}
