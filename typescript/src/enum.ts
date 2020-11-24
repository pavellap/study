enum Subscription {
    Basic,
    Standard,
    Premium,
    Deluxe= 4,
}
/**
* Value of enum field may be any type not only integer but also strings
* */
const myLevelSub = Subscription.Deluxe;
const downgradeSub = Subscription.Basic;
console.log(myLevelSub);
console.log(downgradeSub);