import { FaTubeService } from './../../../Services/fa-tube.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, TemplateRef, HostListener } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';

declare var $: any;
@Component({
  selector: 'app-fa-tube-home',
  templateUrl: './fa-tube-home.component.html',
  styleUrls: ['./fa-tube-home.component.scss']
})
export class FaTubeHomeComponent implements OnInit {

  key: string;
  from: Date;
  to: Date;
  orderValue = [
    'date',
    'rating',
    'relevance',
    'title',
    'videoCount',
    'viewCount'
  ];
  selectedOrder: string;
  listSearch = [];
  modalRef: BsModalRef;
  currentYoutubeLink: string;
  nextPage: string;

  loading: boolean;
  numPerPage: number = 5;
  debounceTime: number = 800;

  constructor(private router: Router,
    private ActivatedRoute: ActivatedRoute,
    private tubeS: FaTubeService,
    public sanitizer: DomSanitizer,
    private modalService: BsModalService) {

  }

  ngOnInit() {
    this.ActivatedRoute.queryParams.subscribe(data => {
      [this.selectedOrder, this.from, this.to, this.key]
        = [data.order,
        data.publishedAfter ? new Date(data.publishedAfter) : undefined,
        data.publishedBefore ? new Date(data.publishedBefore) : undefined,
        data.q];
      this.getDataFromUtube();
    })
  }

  @HostListener('window:scroll')
  onScrollEnd() {
    if ($(window).scrollTop() + $(window).height() == $(document).height() && this.nextPage && !this.loading) {
      this.getDataFromUtube(this.nextPage);
    }
  }

  timeOut;
  getDataFromUtube(pageToken: string = "") {
    this.loading = true;
    clearTimeout(this.timeOut);
    this.timeOut = setTimeout(() => {
      let urlArr = this.router.url.split("?");
      urlArr.shift();
      let next = pageToken ? `&pageToken=${pageToken}` : '';
      let url = urlArr.join("") + `&maxResults=${this.numPerPage}` + next;
      this.tubeS.getDataFromUtube(url).subscribe(data => {
        if (data.items.length) {
          this.nextPage = data.nextPageToken;
          data.items.map(item => {
            if (item.id.kind == "youtube#video") {
              item.youtubeLink = "http://www.youtube.com/embed/" + item.id.videoId;
              item.isVideo = true;
            } else {
              item.youtubeLink = "";
              item.isVideo = false;
            }
            item.imgThumbUrl = item.snippet.thumbnails.high.url;
          });
          pageToken ? this.listSearch.push(...data.items) : this.listSearch = data.items;
        }
        this.loading = false;
        
      }, err => {
        console.log(err);
        this.loading = false;
      });
    }, this.debounceTime);

  }

  openModal(template: TemplateRef<any>, link?) {
    this.currentYoutubeLink = link;
    this.modalRef = this.modalService.show(template);
  }

  changeUrl() {
    let dateFrom = this.from ? (typeof this.from == "string") ? this.from : this.from.toISOString() : undefined;
    let dateTo = this.to ? (typeof this.to == "string") ? this.from : this.from.toISOString() : undefined;
    this.router.navigate(['/fa-tube'],
      {
        queryParams: {
          order: this.selectedOrder,
          publishedAfter: dateFrom,
          publishedBefore: dateTo,
          q: this.key
        },
        queryParamsHandling: 'merge'
      });

  }

}
