# updating-objects-inside-arrays-in-state

In this read, I learn that:

- objects 'contained' inside an array aren't really located inside the array, they are just `references to the objects`
- when updating nested state, `create a copy from the point you want to update all the way up to the top level`
- you should `only mutate objects that you've just created not the ones already in state`. You could mutate a tourist site that you've just added but not the one that's already in state. For the object already in state, `you need to make a copy of it`
- you shouldn't need to update state more than a couple of levels deep. If your state objects are very deep, `restructure them so that they are flat`
- if you don't want to resructure your state objects, `use Immer`
