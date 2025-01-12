import { SocialLinkSchema } from "@data/schema/social-links.schema";
import { envelope } from '@icon/solid.icon'
import { github, instagram, linkedin } from '@icon/brand.icon'


const socialLinkData: SocialLinkSchema[] = [
  {
    name: 'Github',
    path: github,
    link: 'http://www.siggraph.org.tw/index.html',
    color: '#c3c3c3',
  },
  {
    name: 'LinkedIn',
    path: linkedin,
    link: 'http://www.siggraph.org.tw/index.html',
    color: '#1469C7',
  },
  {
    name: 'Message',
    path: envelope,
    link: 'http://www.siggraph.org.tw/index.html',
    color: '#e74c3c',
  },
  {
    name: 'Instagram',
    path: instagram,
    link: 'http://www.siggraph.org.tw/index.html',
    color: '#E52765',
  },
];

export default socialLinkData;
