## Running Locally

This application requires Node.js v18.13+.
Build with Angular 17.  
Before running this project, you should install upper applications.

```bash
npm install
```

Before starting the application, you need to rename the files inside the `src/environments` directory. Remove the `.bak` file extension from `environment.ts.bak` and `environment.development.ts.bak`. Then run:
```bash
 npm start
```

Wait to compile and go to http://localhost:4200 after compile finish

This project is referenced from kevinflor.es

## Push Github

After "git push", please enter the commands below for deploying.

```bash
ng build  --base-href=/taipei-acm-siggraph/

npx ngh --dir=dist/client/browser --no-silent
```