[![license](http://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat)](https://github.com/cdnjs/cdnjs/blob/master/MIT-LICENSE)

# Console Injector

Console injector is a chrome extension allowing easy injection of javascript scripts into any page from the console. 

```
console.inject('jquery');
```

This is very handy for quickly testing ideas in the console and rapidly injecting code into existing sites. Console.inject searches [cdnjs](http://github.com/cdnjs/cdnjs) for javascript libraries matching a given input string, and inserts the latest corresponding script hosted at [cdnjs.cloudflare.com](http://cdnjs.cloudflare.com).

Console injector was the product of a hackathon team at [Hack Reactor](http://www.hackreactor.com) consisting of [Andy Coenen](http://www.github.com/cannoneyed), [Wesley Smyth](http://www.github.com/wesleysmyth), [Kiran Rao](http://www.github.com/kranrao), [Henry Wong](http://www.github.com/henryw4k), and [Matt Conrad](http://www.github.com/mmconrad).



## Adding a new or updating an existing library

cdnjs relies on user-submitted pull requests and automatic updating via `npm` to populate and update libraries.

To add a new library, or update an existing library outside of `npm`, start by [forking the cdnjs repo](https://github.com/cdnjs/cdnjs/fork) to your own GitHub account.

If you're adding/modifying outside of the GitHub browser interface, for example on the command line or with the GitHub desktop application, you will need to additionally install `node` locally. For more information on installing `node`, please refer to [nodejs.org](http://nodejs.org).

When you have forked the cdnjs repo, add your library to it. Libraries are stored in the `ajax/libs` directory. Each library has its own subdirectory of `ajax/libs` and each version of the library has its own subdirectory of the library directory name, for example:

```
/ajax/libs/jquery/2.0.0/