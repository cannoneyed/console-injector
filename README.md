[![license](http://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat)](https://github.com/cdnjs/cdnjs/blob/master/MIT-LICENSE)

# Console Injector

Console injector allows easy injection of javascript scripts into any page from the console. 

```
console.inject('jquery');
```

[cdnjs](http://github.com/cdnjs/cdnjs) is the repository mirroring all library assets on [cdnjs.cloudflare.com](http://cdnjs.cloudflare.com).

[Thomas Davis](https://twitter.com/neutralthoughts) and [Ryan Kirkman](https://twitter.com/ryan_kirkman) created cdnjs, [Drew Freyling](http://decompile.it/blog/) and [Peter Dave Hello](https://github.com/PeterDaveHello) are maintainers. [Juan Gallardo](http://www.jgallardo.me/) is our community moderator.

cdnjs will host any production version of any JavaScript/CSS library, subject to licence permissions.

  * Beta, release candidate and alpha releases are not usually considered ready for full production status. Requests for pre-release versions of libraries _may_ be declined after peer review.
  * We'll accept beta, release candidate and alpha releases if you are using our npm/git auto-update mechanism, if you really want it, please setup auto-update for that lib.

Please raise a new pull request for new library additions and existing library updates, following the instructions below.

## IMPORTANT - No more manual submissions

[Discussion](https://github.com/cdnjs/cdnjs/issues/3638)

It's time for us to move away from manual submissions and focus solely on getting libraries updating from official sources. Everything is still flakey and we hope you can bear with us in this transition. 

*All pull request should just add auto update configs to the package.json*





## Adding a new or updating an existing library

cdnjs relies on user-submitted pull requests and automatic updating via `npm` to populate and update libraries.

To add a new library, or update an existing library outside of `npm`, start by [forking the cdnjs repo](https://github.com/cdnjs/cdnjs/fork) to your own GitHub account.

If you're adding/modifying outside of the GitHub browser interface, for example on the command line or with the GitHub desktop application, you will need to additionally install `node` locally. For more information on installing `node`, please refer to [nodejs.org](http://nodejs.org).

When you have forked the cdnjs repo, add your library to it. Libraries are stored in the `ajax/libs` directory. Each library has its own subdirectory of `ajax/libs` and each version of the library has its own subdirectory of the library directory name, for example:

```
/ajax/libs/jquery/2.0.0/