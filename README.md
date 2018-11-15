# postman-collections-scripts
This shows the usage to update segregated scripts from collections json and then merge them using gulp.


## Setup

1. Keep all the scripts in scripts folder (This can be any folder, just update the mapping in the ```config.json```)
2. Map the Url name action to its corresponding script (see [config.json](config.json))



## Commands

### Install dependencies

```sh

npm install

```

### Run 

```sh

gulp --dest=dist --src=src

```


### Newman

```sh
newman run dist/GithubCollection.postman_collection.json
```
