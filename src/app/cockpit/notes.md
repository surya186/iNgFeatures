In general we can use the local reference via the method call (passing local reference from html to ts via the methods) but what if we need to out side the method as well.

  
In that case, we use @ViewChild() decorator (imported viewchild from @angular/core)

@ViewChild('serverContentInput', { static: true }) serverContentInput : ElementRef;
                     |                    |                 |  
     This is a our local reference        |        this is a new property 
       (which is a selector)              |
                                          |
                                     angular 8 
        (option was introduced to support creating embedded views on the fly)     