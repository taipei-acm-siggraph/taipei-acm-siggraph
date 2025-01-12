import { Injectable, computed, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import profileData from '@data/profile.data';
import navlinkData from '@data/nav-link.data'
import { environment } from '@env/environment';

type MetaImageStyle = 'summary_large_image' | 'summary';

@Injectable({
  providedIn: 'root'
})

export class MetaService {
  links = computed(() => navlinkData)
  public defaultImage: string = './assets/image/meta-image.jpg'
  public urlKeywords: string[] = ['blog/', 'project/'];
  private meta = inject(Meta);
  private router = inject(Router);
  private title = inject(Title);

  get contentType(): string{
   return this.urlKeywords.some(str => this.router.url.includes(str)) ? 'article' : 'website'
  }

  get contentName(): string{
    const routeInfo = this.router.url
    const splitted = routeInfo.split("/")
    // console.log(splitted)
    const navlinkData= this.links()
    let contentName =""
    const firstlayer = navlinkData.filter(function(item) {  
      return item.path == "/"+(splitted[1] == "info"?  "" : splitted[1])
    });
    // console.log(firstlayer)
    if(firstlayer[0].childrens.length > 0 ){
      const secondLayer = firstlayer[0].childrens.filter(function(item) {  
        return item.path == "/"+splitted[1]+"/"+splitted[2]
      });
      contentName=secondLayer[0].name
      // console.log(secondLayer)
    }
  return contentName
  }

  get rootUrl(): string{
    return `${environment.url}${this.router.url}`
  }

  get routerUrl(): string{
    const routeInfo = this.router.url
    const splitted = routeInfo.split("/")
    // console.log(splitted)
    const navlinkData= this.links()
    let contentName =""
    const firstlayer = navlinkData.filter(function(item) {  
      return item.path == "/"+(splitted[1] == "info"?  "" : splitted[1])
    });
    // console.log(firstlayer)
    contentName += firstlayer[0].name
    if(firstlayer[0].childrens.length > 0 && splitted.length > 2){
      const secondLayer = firstlayer[0].childrens.filter(function(item) {  
        return item.path == "/"+splitted[1]+"/"+splitted[2]
      });
      // console.log(secondLayer)
      contentName+=" > "
      contentName+=secondLayer[0].name
      // console.log(secondLayer)
    }
    return contentName
  }

  setMetaTags(title: string, description: string, keywords?: string | Array<string> | null, image?: string | null , metaImageStyle?: MetaImageStyle): void{
    this.title.setTitle(title);
    this.meta.addTags([
      {name: 'title', content: title},
      {name: 'description', content: description},
      {name: 'keywords', content: Array.isArray(keywords) ? keywords.join(', ') : keywords as string},
      {name: 'authors', content: profileData.name},
      {name: 'og:title', content: title},
      {name: 'og:description', content: description},
      {name: 'og:url', content: this.rootUrl},
      {name: 'og:image', content: image || this.defaultImage},
      {name: 'og:locale', content: 'en_US'},
      {name: 'og:type', content: this.contentType},
      {name: 'og:site_name', content: title},
      {name: 'twitter:card', content: metaImageStyle || 'summary_large_image'},
      {name: 'twitter:url', content: this.rootUrl},
      {name: 'twitter:title', content: title},
      {name: 'twitter:description', content: description},
      {name: 'twitter:image', content: image || this.defaultImage},
      {name: 'twitter:site', content: '@marckevinflores'},
      {name: 'twitter:creator', content: '@marckevinflores'},
    ])
  }
}
