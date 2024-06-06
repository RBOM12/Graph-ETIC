import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  resizeIframe() {
    const iframe = document.querySelector('.dashboard-content') as HTMLIFrameElement;
    const nav = document.querySelector('nav') as HTMLElement;
    const footer = document.querySelector('footer') as HTMLElement;

    if (iframe && nav && footer) {
      const navHeight = nav.offsetHeight;
      const footerHeight = footer.offsetHeight;
      const availableHeight = window.innerHeight - navHeight - footerHeight - 50 - window.innerHeight * 0.05;
      iframe.style.height = availableHeight + 'px';
    }
  }

  getPBIUrl(anne: number, type: number) {
    let url ="" ;
    if (type === 1) {
      if (anne === 2023) {
        url = "https://app.powerbi.com/reportEmbed?reportId=5f5c1072-7216-4af0-9afb-8c7771722d92&autoAuth=true&ctid=fd4cb2fb-3983-4628-95b9-54f637f99dd3"
      } else if (anne === 2024) {
        url ="https://app.powerbi.com/reportEmbed?reportId=8337cd4b-80f7-420d-be6b-24a4fde07c64&autoAuth=true&ctid=fd4cb2fb-3983-4628-95b9-54f637f99dd3"
      }
    }
    else if (type === 2) {
      if (anne === 2023) {
        url = "https://app.powerbi.com/reportEmbed?reportId=25d6e719-6577-4910-adb9-49d63c842a64&autoAuth=true&ctid=fd4cb2fb-3983-4628-95b9-54f637f99dd3"

      } else if (anne === 2024) {
        url = "https://app.powerbi.com/reportEmbed?reportId=3f0a6c3c-00b8-4784-9ff2-a1b528753391&autoAuth=true&ctid=fd4cb2fb-3983-4628-95b9-54f637f99dd3"
      }

  }
    return url;
    }

}
