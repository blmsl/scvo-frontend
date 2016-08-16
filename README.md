# SCVO Website (public frontend) [![Build Status](https://travis-ci.org/scvodigital/scvo-frontend.svg?branch=angular2)](https://travis-ci.org/scvodigital/scvo-frontend)

[![Dependency Status](https://david-dm.org/scvodigital/scvo-frontend/angular2.svg)](https://david-dm.org/scvodigital/scvo-frontend/angular2) [![devDependency Status](https://david-dm.org/scvodigital/scvo-frontend/angular2/dev-status.svg)](https://david-dm.org/scvodigital/scvo-frontend/angular2#info=devDependencies)

This is the repository for the new SCVO website project, it contains the codebase for the public website. Development deployment instructions are listed below.

This repository [Wiki](https://github.com/scvodigital/scvo-frontend/wiki) contains project documentation.

## Websites
* [Platform frontend](https://alpha.scvo.org.uk) (running on [Firebase](https://firebase.google.com))
* [Platform backend](https://cms.scvo.org.uk) (running on [Platform.sh](https://platform.sh))
* [Platform search](http://search.scvo.org.uk:9200) (running on [Elastic Cloud](https://www.elastic.co/cloud))

## Information
* [Documentation](https://github.com/scvodigital/scvo-frontend/wiki)
* [Bug tracker](https://github.com/scvodigital/scvo-frontend/issues)

## Technical Specs
* AngularJS app - [alpha.scvo.org.uk](https://alpha.scvo.org.uk) (to become beta.scvo.org.uk then www.scvo.org.uk)
    * Uses [Sass](http://sass-lang.com) for styles to extend the capabilities of CSS
    * Uses [LiveReload](http://livereload.com) to automatically reload code changes in development
* Elasticsearch search engine - [search.scvo.org.uk](http://search.scvo.org.uk:9200)
* Drupal CMS - [cms.scvo.org.uk](http://cms.scvo.org.uk)
    * Connects independently to Elasticsearch to index content across all web properties
* Salesforce - [www.salesforce.com](http://www.salesforce.com)
    * Indexed via [Elasticforce](https://github.com/scvodigital/scvo-elasticforce)

## Deployment
### Development
This branch uses [Webpack](https://webpack.github.io/) for Development.

    git clone https://github.com/scvodigital/scvo-frontend
    cd scvo-frontend
    sudo gem install sass
    sudo npm install -g webpack webpack-dev-server typings typescript firebase-tools
    npm install
    npm start

The [website running locally](http://localhost:2000) will then load. As code changes are made they will be reflected in the local website.

### Production
Continuous integration via [Travis](https://travis-ci.org).
