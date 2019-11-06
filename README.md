# compodoc-issue-repo

Please do the following to repro:

1) clone the repo
2) yarn
3) yarn compo-doc

Compodoc generates documentation into _/documentation_ folder.

App structure:

```
.
+-- AppModule
| +-- ModuleOne
|   +-- firstComponent
| +-- ModuleTwo
|   +-- SecondComponent
```
    
But in the generated document,  `ModuleTwo` has wrong component information.

also `entryComponents` link leads to 404.
