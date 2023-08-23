type script
```ts
const a1=[1,2,3,4,5,]
const a2=_.concat(a1,[6,7])
console.log(a2)
```

```ts
const a1=[1,2,3,4,5,]
const a2=_.difference(a1,[5,4])
console.log(a2)
```


```ts
const a1=[1,2,3,4,5,6]
const a2=_.drop(a1,2)
const a2=_.dropright(a2,2)
console.log(a2)
```


```ts
const a1=[1,2,3,4,5,6]
const a2=_.take(a1,2)
const a2=_.takeright(a2,2)
console.log(a2)
```

```ts
const a1=[1,2,3,4,5,6]
const a2=_.chunk(a1,2)
console.log(a2)
```

```ts
const a1=[1,2,3,4,5,6]
const a2=_.intersection(a1,[5])
console.log(a2)
```

```ts
const a1=[1,2,3,4,5,6]
const a2=_.join(a1,'-')
console.log(a2)
```

```ts
const a1=[1,2,3,4,5,6]
const a2=_.last(a1)
console.log(a2)
```

```ts
const a1=[1,2,3,4,5,6]
const a2=_.reverse(a1)
console.log(a2)
```

```ts
const a1=[1,2,3,3,4,4,5,6]
const a2=_.uniq(a1)
console.log(a2)
```