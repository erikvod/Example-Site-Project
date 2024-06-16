import React from 'react';
import { Select,SelectOption, SelectList,MenuToggle,MenuToggleElement,Badge } from '@patternfly/react-core';

export default function UserFilter({users, setSelectedItems,selectedItems}) {
        const [isOpen, setIsOpen] = React.useState(false);
      
        const onToggleClick = () => {
          setIsOpen(!isOpen);
        };
      
        const onSelect = (_event: React.MouseEvent<Element, MouseEvent> | undefined, value: string | number | undefined) => {
          console.log('selected', value);
      
          if (selectedItems.includes(value as number)) {
            setSelectedItems(selectedItems.filter((id) => id !== value));
          } else {
            setSelectedItems([...selectedItems, value as number]);
          }
        };
      
        const toggle = (toggleRef: React.Ref<MenuToggleElement>) => (
          <MenuToggle
            ref={toggleRef}
            onClick={onToggleClick}
            isExpanded={isOpen}
            style={
              {
                width: '200px'
              } as React.CSSProperties
            }
          >
            Filter by status
            {selectedItems.length > 0 && <Badge isRead>{selectedItems.length}</Badge>}
          </MenuToggle>
        );
return (
    <Select
      role="menu"
      id="checkbox-select"
      isOpen={isOpen}
      selected={selectedItems}
      onSelect={onSelect}
      onOpenChange={(nextOpen: boolean) => setIsOpen(nextOpen)}
      toggle={toggle}
    >
      <SelectList>
        {
        users.map(u => 
            <SelectOption hasCheckbox key={u.id} value={u.id} isSelected={selectedItems.includes(u.id)}>
                {u.name}
            </SelectOption>)}
      </SelectList>
    </Select>
  );
}
