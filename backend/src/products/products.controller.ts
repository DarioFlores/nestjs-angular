import { Controller, Post, Res, HttpStatus, Body, Get, Param, NotFoundException, Delete, Query, Put } from '@nestjs/common';
import { CreateProductDto } from './dto/product.dto';
import { ProductsService } from './products.service';


@Controller('products')
export class ProductsController {

    constructor( private readonly productService:ProductsService){

    }

    @Post('/create')
    async createPost(@Res() res, @Body() createProductDto:CreateProductDto){
        // console.log(createProductDto);
        const product = await this.productService.createProduct(createProductDto);
        res.status(HttpStatus.OK).json({
            menssage: "Product Successfully Created",
            product
        })
    }


    @Get('/')
    async getProducts(@Res() res){
        const products =  await this.productService.getProducts()
        res.status(HttpStatus.OK).json({
            products
        })
    
    }

    @Get('/:id')
    async getProduct(@Res() res, @Param('id') id){
        const product =  await this.productService.getProduct(id)
        if (!product) {
            throw new NotFoundException('Producto no encontrado')
        }
        return res.status(HttpStatus.OK).json(product)
    
    }

    @Delete('/delete')
    async deleteProduct(@Res() res, @Query('id') id){
        const product =  await this.productService.deleteProduct(id)
        if (!product) {
            throw new NotFoundException('Producto no encontrado')
        }
        return res.status(HttpStatus.OK).json({
            menssage: "Product Deleted Successfully",
            product
        })
    
    }

    @Put('/update/:id')
    async updateProduct(@Res() res, @Param('id') id, @Body() createProductDto:CreateProductDto){
        const product =  await this.productService.updateProduct(id, createProductDto)
        if (!product) {
            throw new NotFoundException('Producto no encontrado')
        }
        return res.status(HttpStatus.OK).json({
            menssage: "Product Update Successfully",
            product
        })
    
    }
}
