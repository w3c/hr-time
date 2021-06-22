Closes #???

Person merging, please make sure that commits are squashed with one of the following as a commit message prefix:

- chore: fixes unrelated to the spec itself (e.g., fix to Github action, html tidy, spec config, etc.). 
- editorial: a non-normative change to the spec (e.g., fixing an example or typo, adding a note).
- change: a normative change to existing engine behavior.
- And use none if it's a new normative requirement. 

If this is a "change", please explain what's significantly changing. 
In particular, if the change results in potential backwards compatibility issues and content breakage, it needs to be justified.

For normative spec changes, please get implementation commitments anf file issues on the various engines during the review process. All tasks should be complete before merging. 

Implementation commitment - primarily for "change" and other normative changes:

- [ ] [WebKit](https://bugs.webkit.org/???)
- [ ] [Chromium](https://bugs.chromium.org/???)
- [ ] [Gecko](http://bugzilla.mozilla.org/???)

Tasks:

- [ ] [Added tests](https://github.com/web-platform-tests/wpt/pulls/???)
