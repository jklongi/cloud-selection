type Item = object

type Props<I extends Item> = {
    items: I[]
    renderItem: (item: I) => JSX.Element | null
    Container: React.ElementType
}

const List = <I extends Item>({ items, renderItem, Container }: Props<I>) => (
    <Container>{items.map(renderItem)}</Container>
)

export default List
