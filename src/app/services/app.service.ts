import { Injectable } from '@angular/core';

import { BreadcrumbService } from 'ng2-breadcrumb/ng2-breadcrumb';

import { DrupalService } from './drupal.service';

@Injectable()
export class AppService {

    public navigationMenu: Object;

    public cmsCategories: Object;
    public cmsTags: Object;

    constructor(private _drupalService: DrupalService, private breadcrumbService: BreadcrumbService) {

        this.navigationMenu = [
            {
                'title': 'Home',
                'path': '/'
            },
            {
                'title': 'Running your organisation',
                'path': '/running-your-organisation',
                'contents': [
                    {
                        'title': 'Finance',
                        'path': '/running-your-organisation/finance',
                        'term_id': 13
                    },
                    {
                        'title': 'Business management',
                        'path': '/running-your-organisation/business-management',
                        'term_id': 14
                    },
                    {
                        'title': 'Governance',
                        'path': '/running-your-organisation/governance',
                        'term_id': 15
                    },
                    {
                        'title': 'Funding',
                        'path': '/running-your-organisation/funding',
                        'term_id': 16
                    },
                    {
                        'title': 'Legislation & regulation',
                        'path': '/running-your-organisation/legislation-regulation',
                        'term_id': 17
                    },
                ]
            },
            {
                'title': 'Employability',
                'path': '/employability',
                'contents': [
                    {
                        'title': 'Community Jobs Scotland',
                        'path': '/employability/community-jobs-scotland',
                        'term_id': 19
                    },
                    {
                        'title': 'Disability equality internships',
                        'path': '/employability/disability-equality-internships',
                        'term_id': 20
                    },
                    {
                        'title': 'Past employability schemes',
                        'path': '/employability/past-employability-schemes',
                        'term_id': 21
                    }
                ]
            },
            {
                'title': 'Services',
                'path': '/services',
                'term_id': 43,
                'contents': [
                    {
                        'title': 'SCVO membership',
                        'path': '/services/scvo-membership'
                    },
                    {
                        'title': 'Good HQ',
                        'path': '/services/good-hq'
                    },
                    {
                        'title': 'Office space',
                        'path': '/services/office-space'
                    },
                    {
                        'title': 'Credit Union',
                        'path': '/services/credit-union'
                    },
                    {
                        'title': 'Third Force News',
                        'path': '/services/third-force-news'
                    },
                    {
                        'title': 'Goodmoves',
                        'path': '/services/goodmoves'
                    },
                    {
                        'title': 'Funding Scotland',
                        'path': '/services/funding-scotland'
                    },
                    {
                        'title': 'Payroll',
                        'path': '/services/payroll'
                    },
                    {
                        'title': 'Digital participation',
                        'path': '/services/digital-participation'
                    },
                    {
                        'title': 'Scottish Accessible Information Forum',
                        'path': '/services/scottish-accessible-information-forum'
                    },
                    {
                        'title': 'Professional networks',
                        'path': '/services/professional-networks'
                    },
                    {
                        'title': 'Affiliate deals',
                        'path': '/services/affiliate-deals'
                    }
                ]
            },
            {
                'title': 'Events & training',
                'path': '/events',
                'contents': [
                    {
                        'title': 'Scottish Charity Awards',
                        'path': '/events/scottish-charity-awards'
                    },
                    {
                        'title': 'The Gathering',
                        'path': '/events/the-gathering'
                    },
                    {
                        'title': 'Training courses',
                        'path': '/training/search'
                    }
                ]
            },
            {
                'title': 'Policy',
                'path': '/policy',
                'contents': [
                    {
                        'title': 'Blogs',
                        'path': '/policy/blogs',
                        'term_id': 38
                    },
                    {
                        'title': 'Consultation responses',
                        'path': '/policy/consultation-responses',
                        'term_id': 39
                    },
                    {
                        'title': 'Briefings & reports',
                        'path': '/policy/briefings-reports',
                        'term_id': 41
                    },
                    {
                        'title': 'Policy committee',
                        'path': '/policy/policy-committee',
                        'term_id': 42
                    }
                ]
            },
            {
                'title': 'About',
                'path': '/about-us',
                'term_id': 50,
                'class': 'right'
            },
            {
                'title': 'Contact',
                'path': '/contact-us',
                'class': 'right'
            },
            {
                'title': 'Media',
                'path': '/media-centre',
                'class': 'right'
            },
            {
                'title': 'Join',
                'path': '/join-scvo',
                'class': 'right'
            }
        ];

        // Set breadcrumb titles
        // this.navigationMenu = _menuItems.navigationMenu;
        for (var level1 in this.navigationMenu) {
            breadcrumbService.addFriendlyNameForRoute(this.navigationMenu[level1].path, this.navigationMenu[level1].title);
            for (var level2 in this.navigationMenu[level1].contents) {
                breadcrumbService.addFriendlyNameForRoute(this.navigationMenu[level1].contents[level2].path, this.navigationMenu[level1].contents[level2].title);
                // for (var level3 in this.navigationMenu[level1].contents[level2]) {
                //     // breadcrumbService.addFriendlyNameForRoute(this.navigationMenu[level1].contents[level2].contents[level3].path, this.navigationMenu[level1].contents[level2].contents[level3].title);
                // }
            }
        }

        // Get categories from Drupal
        this.cmsCategories = {};
        this._drupalService.request('categories').subscribe(categories => {
            for (var key in categories) {
                var tid = categories[key].tid[0].value;
                var name = categories[key].name[0].value;
                this.cmsCategories[tid] = name;
            }
        });

        // Get tags from Drupal
        this.cmsTags = {};
        this._drupalService.request('tags').subscribe(tags => {
            for (var key in tags) {
                var tid = tags[key].tid[0].value;
                var name = tags[key].name[0].value;
                this.cmsTags[tid] = name;
            }
        });
    }
}