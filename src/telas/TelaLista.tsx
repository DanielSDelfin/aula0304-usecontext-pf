import {Text,ListItem, Icon, Button} from "@rneui/base"
import { FlatList,View } from "react-native"
import dadosUsuarios from "../Dados/dadosUsuarios"
import { Avatar } from "@rneui/themed"

function getUsuarios({item}){
    return(
        <ListItem>
            <Avatar source={{uri: item.fotoPerfil}} rounded size = {60}/>
            <ListItem.Content>
                <ListItem.Title>{item.nome}</ListItem.Title>
                <ListItem.Subtitle>{item.email}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Content right style = {{flexDirection:'row'}}>
                <Button
                    icon ={<Icon name = 'edit' color = 'orange' />}
                    type = 'clear'
                />
                <Button
                icon ={<Icon name = 'delete' color = 'red' />}
                type = 'clear'
                />
            </ListItem.Content >

        </ListItem>
    )
}

export default props =>{

    return(
        <View>
        <Text>Tela Listagem</Text>
        <FlatList
            data={dadosUsuarios}
            renderItem={getUsuarios}
        />
        </View>
    )

}